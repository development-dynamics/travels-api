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
