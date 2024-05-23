.PHONY: prepare database
COMPOSE_FILE := docker-compose.yaml
ENV_FILE := .env

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
