#!/bin/sh

mvn clean compile 
rm -rf src/main/frontend/node_modules
mvn archetype:create-from-project
cp ./archetype-metadata.xml target/generated-sources/archetype/src/main/resources/META-INF/maven
cd target/generated-sources/archetype
mvn clean install