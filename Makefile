SHELL := /bin/bash

GIT_TAG := $(shell git rev-parse --short HEAD 2> /dev/null)
DEV_GCP_BUCKET := gs://dev.cllctve-test.com

init: deps

deps:
	npm install --quiet

test:
	npm run format:dry

build-staging:
	GIT_TAG=$(GIT_TAG) \
	REACT_APP_CLLCTVE_API_ORIGIN="http://cllctve-backend-dot-alpha-247519.appspot.com" \
	npm run build

deploy-staging: build-staging
	NODE_ENV="test" \
	node ./slackNotification.js

.PHONY: deploy-staging ci
