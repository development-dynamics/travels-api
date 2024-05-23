.PHONY: prepare database
COMPOSE_FILE := docker-compose.yaml
ENV_FILE := .env

up-db:
	@echo "Starting database"
	docker compose -f $(COMPOSE_FILE) --env-file $(ENV_FILE) up -d db
	@echo "Database started"

down-db:
	@echo "Stopping database"
	docker compose -f $(COMPOSE_FILE) --env-file $(ENV_FILE) down db
	@echo "Database stopped"

up-dev:
	@echo "Starting development environment"
	docker compose -f $(COMPOSE_FILE) --env-file $(ENV_FILE) up -d db app

	@echo "Development environment started"

down-dev:
	@echo "Stopping development environment"
	@echo "Stopping server"
	docker compose -f $(COMPOSE_FILE) --env-file $(ENV_FILE) stop app
	@echo "Stopping development containers"
	docker compose -f $(COMPOSE_FILE) --env-file $(ENV_FILE) down
	@echo "Development environment stopped"
