# Makefile

install: # Запуск npm ci
			npm ci


publish: # Публикация
			npm publish --dry-run

lint: # Запуск eslint 
			npx eslint .


lint-fix: # Запуск eslint fix
	npx eslint . --fix			