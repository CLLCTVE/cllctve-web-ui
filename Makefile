SHELL := /bin/bash
DEV_PROJECT_ID := cllctve-test
PROD_PROJECT_ID := cllctve-prod

GIT_TAG := $(shell git rev-parse --short HEAD 2> /dev/null)
DEV_GCP_BUCKET := gs://www.cllctve-test.com
PROD_GCP_BUCKET := gs://www.cllctve.com

DEV_API_ENDPOINT := https://cllctve-api-dot-cllctve-dev.ue.r.appspot.com
PROD_API_ENDPOINT := https://cllctve-api-dot-cllctve-prod.ue.r.appspot.com

init: deps

deps:
	npm install --quiet

test:
	npm run format:dry

set-dev-project:
	gcloud config set project $(DEV_PROJECT_ID)

build-dev:
	GIT_TAG=$(GIT_TAG) \
	REACT_APP_CLLCTVE_API_ORIGIN="https://api.cllctve-test.com" \
	npm run build

mb-dev:
	gsutil mb $(DEV_GCP_BUCKET)
	gsutil defacl set public-read $(DEV_GCP_BUCKET)

deploy-dev: build-dev set-dev-project
	NODE_ENV="development" \
	gsutil rsync -r ./build $(DEV_GCP_BUCKET)/build
	gcloud app deploy app.yaml

set-prod-project:
	gcloud config set project $(PROD_PROJECT_ID)

build-prod: set-prod-project
	GIT_TAG=$(GIT_TAG) \
	REACT_APP_CLLCTVE_API_ORIGIN="https://cllctve-api-dot-cllctve-prod.ue.r.appspot.com" \
	npm run build

mb-prod: set-prod-project
	gsutil mb $(PROD_GCP_BUCKET)
	gsutil defacl set public-read $(PROD_GCP_BUCKET)
	gsutil iam ch allUsers:objectViewer $(PROD_GCP_BUCKET)

deploy-prod: set-prod-project build-prod
	NODE_ENV="staging" \
	gsutil -m rsync -r -d ./build $(PROD_GCP_BUCKET)/build
	gsutil cp ./app.yaml $(PROD_GCP_BUCKET)
	gcloud app deploy app.yaml

.PHONY: deploy-staging ci

#gsutil -m web set -m build/index.html -e build/index.html gs://dev.cllctve-test.com
#gsutil -m web set -m index.html -e index.html gs://www.cllctve-test.com
#gsutil -m acl -R -u AllUsers:R gs://dev.cllctve-test.com
#gsutil -m acl ch -R -u AllUsers:R gs://dev.cllctve-test.com
#gsutil defacl set public-read gs://dev.cllctve-test.com
#gcloud app deploy
#gsutil rsync -r gs://www.cllctve-test.com  ./cllctve-ui
