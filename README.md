# MNIST in your browser

Using [TensorFlow.js](http://js.tensorflow.org) to train data and predict numbers just in your browser!

The training script is taken from [tfjs-example](https://github.com/tensorflow/tfjs-examples).

### Preview
[screencast-dabuside_github_io-2024_07_09-18_33_13.webm](https://github.com/dabuside/K/assets/7280952/657bd118-9e2d-4600-a08f-defd8c94c6ee)


## Get Started
```
git clone repo
cp ./mnist_images.png ./dist/mnist_images.png & cp ./mnist_labels_uint8 ./dist/mnist_labels_uint8
yarn
yarn watch
```

## Build
```
yarn build
```

[Online demo](https://dabuside.github.io/K/)

### Tips

- tensorFlow.js requires webGL, you'd better use PC.
- you may wait 10s to load training set(~10mb) and training script(~1mb) and another 3s to train data.
