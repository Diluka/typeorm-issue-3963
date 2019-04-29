### reproduce [issue](https://github.com/typeorm/typeorm/issues/3963)
```log
$ npm run typeorm:migration:generate -- Init

> demo@1.0.0 typeorm:migration:generate <BASE_PATH>
> ts-node --files ./node_modules/.bin/typeorm migration:generate -n "Init"

Migration <BASE_PATH>/migration/1556519038466-Init.ts has been generated successfully.
$ npm run typeorm:migration:run 

> demo@1.0.0 typeorm:migration:run <BASE_PATH>
> ts-node --files ./node_modules/.bin/typeorm migration:run

query: SELECT * FROM `INFORMATION_SCHEMA`.`COLUMNS` WHERE `TABLE_SCHEMA` = 'demo' AND `TABLE_NAME` = 'migrations'
query: SELECT * FROM `demo`.`migrations` `migrations`
No migrations are pending
$ npm run typeorm:migration:generate -- Init2

> demo@1.0.0 typeorm:migration:generate <BASE_PATH>
> ts-node --files ./node_modules/.bin/typeorm migration:generate -n "Init2"

Migration <BASE_PATH>/migration/1556519095996-Init2.ts has been generated successfully.
```