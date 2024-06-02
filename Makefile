.PHONY: prepare database
COMPOSE_FILE := docker-compose.yaml
ENV_FILE := .env

up-db:
	@echo "Starting development environment"
	docker compose -f $(COMPOSE_FILE) --env-file $(ENV_FILE) up -d db
	@echo "Database container started"

down-db:
	@echo "Stopping development environment"
	@echo "Stopping database"
	docker compose -f $(COMPOSE_FILE) --env-file $(ENV_FILE) stop db
	@echo "Stopping database container"

up-dev:
	@echo "Starting development environment"
	docker compose -f $(COMPOSE_FILE) --env-file $(ENV_FILE) up -d db
	@echo "Database container started"
	docker compose -f $(COMPOSE_FILE) --env-file $(ENV_FILE) up app

down-dev:
	@echo "Stopping development environment"
	@echo "Stopping server"
	docker compose -f $(COMPOSE_FILE) --env-file $(ENV_FILE) stop app
	@echo "Stopping development containers"
	docker compose -f $(COMPOSE_FILE) --env-file $(ENV_FILE) down
	@echo "Development environment stopped"

connect-app:
	@echo "Connecting to app container"
	docker exec -it travels-api-app-1 sh
	@echo "Connected to app container"

push-db:
	@echo "Pushing database container"
	docker exec -it travels-api-app-1 yarn prisma db push
	@echo "Database container pushed"

i-dep:
	@echo "Installing dependencies"
	docker exec -it travels-api-app-1 yarn install
	@echo "Dependencies installed"

redo-image:
	@echo "Rebuilding image"
	docker compose -f $(COMPOSE_FILE) --env-file $(ENV_FILE) build
	@echo "Image rebuilt"