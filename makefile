OUT_DIR = temp
BUILD_DIR = build
KEY_DIR = keys
REGISTRY = docker-registry.mi9cdn.com:5000
APP_IMAGE = $(REGISTRY)/$(PROJECT)/$(PROJECT):$(VERSION)
BUILD_IMAGE = $(REGISTRY)/nec-network/network-ci:6


clean:
	sudo rm -rf $(OUT_DIR)
	sudo rm -rf $(KEY_DIR)
	sudo rm -rf $(BUILD_DIR)
	sudo rm -rf Docker.aws.json
	sudo rm -rf node_modules
.PHONY: clean


deps:
	docker run --rm -t -v $(PWD):/opt/app -w /opt/app $(BUILD_IMAGE) \
		sh -c "npm set progress=false && npm --no-color install --quiet --allow-root"
.PHONY: deps


build: clean deps
	docker run --rm -t -v $(PWD):/opt/app -w /opt/app $(BUILD_IMAGE) \
		sh -c "npm run build --quiet --no-color"
.PHONY: build


image:
	docker build -t $(APP_IMAGE) .
	docker push $(APP_IMAGE)
.PHONY: image