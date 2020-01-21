# User ID
export USER_ID=`id -u`
export GROUP_ID=`id -g`

# include .env variables
-include .env
export $(shell sed 's/=.*//' .env)

DOCKERCOMPO = USER_ID=${USER_ID} GROUP_ID=$(GROUP_ID) docker-compose
DOCKERCOMPOUP = $(DOCKERCOMPO) up
DOCKERCOMPORUN = $(DOCKERCOMPO) run --rm --service-ports foody_app
DOCKERYARN = $(DOCKERCOMPORUN) yarn

########
# HELP #
########
.SILENT:
.PHONY: help

help: ## Display this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

#########
# SETUP #
#########
setup-dot-env:
	@echo "--> Setup dotenv file"
	#cp .env.dist .env
	cd packages/api && ln -s ../../.env .env
	cd packages/web && ln -s ../../.env .env

##########
# Docker #
##########
docker-build:
	@echo "--> Build docker image"
	docker-compose build
docker-up:
	@echo "--> Start docker services"
	$(DOCKERCOMPO) -f docker-compose.production.yml up -d foody_app
docker-down:
	@echo "--> Stop docker services"
	$(DOCKERCOMPO) down
docker-restart:
	@echo "--> Restart docker services"
	make docker-down
	make docker-up

########
# YARN #
########
yarn-install:
	@echo "--> Install npm dependencies"
	$(DOCKERYARN)
yarn-start:
	@echo "--> Start project"
	$(DOCKERYARN) start
yarn-build:
	@echo "--> Build app"
	$(DOCKERYARN) build
