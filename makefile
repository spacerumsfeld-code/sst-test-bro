# Developmnent

# Testing

# Infrastructure

# Dockerization

# Infrastructure
deploy-dev:
	@echo "Deploying dev infrastructure"
	cd apps/rest-api && npx sst deploy --stage development
	@echo "Deploying to dev complete"

deploy-prod:
	@echo "Deploying dev infrastructure"
	cd apps/infrastructure && npx sst deploy --stage production
	@echo "Deploying to dev complete"