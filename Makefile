SHELL := /bin/bash

GIT_TAG := $(shell git rev-parse --short HEAD 2> /dev/null)
DEV_GCP_BUCKET := gs://www.cllctve-test.com

init: deps

deps:
	npm install --quiet

test:
	npm run format:dry

build-dev:
	GIT_TAG=$(GIT_TAG) \
	REACT_APP_CLLCTVE_API_ORIGIN="https://cllctive-api-dot-cllctve-beta-001.ue.r.appspot.com" \
	npm run build

mb-dev:
	gsutil mb $(DEV_GCP_BUCKET)
	gsutil defacl set public-read $(DEV_GCP_BUCKET)
	gsutil iam ch allUsers:objectViewer gs://$(DEV_GCP_BUCKET)

deploy-dev: build-dev
	gsutil -m rsync -r -d ./build $(DEV_GCP_BUCKET)/build

build-stg:
	GIT_TAG=$(GIT_TAG) \
	REACT_APP_CLLCTVE_API_ORIGIN="https://cllctive-api-dot-cllctve-beta-001.ue.r.appspot.com" \
	npm run build

mb-stg:
	gsutil mb $(STG_GCP_BUCKET)
	gsutil defacl set public-read $(STG_GCP_BUCKET)

deploy-stg: build-stg
	NODE_ENV="staging" \
	gsutil -m rsync -r -d ./build $(STG_GCP_BUCKET)/build
	gsutil cp ./app.yaml $(STG_GCP_BUCKET)
	gcloud app deploy app.yaml

.PHONY: deploy-staging ci
