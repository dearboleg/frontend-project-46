# Makefile

install: # Запуск npm ci
			npm ci


publish: # Публикация
			npm publish --dry-run

lint: # Запуск eslint 
			npx eslint .


lint-fix: # Запуск eslint fix
	npx eslint . --fix		

run: #Запуск node bin/gendiff.js data/file1.json data/file2.json
	node bin/gendiff.js data/file1.json data/file2.json

test: #Запуск тестов
	npm test		