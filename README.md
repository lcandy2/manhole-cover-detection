# Manhole Cover Detection Web and Model / 市政设施智慧预警系统

## Introduction / 简介
This project is designed for the intelligent detection of municipal facilities, specifically manhole covers. It comprises a web frontend built using Node.js and a detection model that uses a pre-trained model file (`best.pt`). The system provides a comprehensive solution for identifying and monitoring manhole covers in urban environments.

该项目旨在市政设施的智能检测，特别是检查井盖。它包含一个使用Node.js构建的前端和一个使用预训练模型文件(`best.pt`)的检测模型。该系统为识别和监控城市环境中的井盖提供了综合解决方案。

## Preview / 预览
![Dashboard 仪表盘](https://github.com/lcandy2/manhole-cover-detection/assets/45784494/a8d5af8e-da78-4504-9b53-27f19f0ecfb6)、

![Submit Test 提交测试](https://github.com/lcandy2/manhole-cover-detection/assets/45784494/0706c446-1918-4fc4-9aec-92d604404553)

## Web Frontend / 前端
See [web/README.md](web/README.md). 查看[web/README.md](web/README.md)。
### How to Use / 如何使用
This is a Node.js project, so you need to have Node.js installed on your computer. You can download it from [here](https://nodejs.org/).
这是一个Node.js项目，所以你需要在你的电脑上安装Node.js。你可以从[这里](https://nodejs.org/)下载。

1. **Clone the Repository / 克隆仓库**
   ```
   git clone <repository_url>
   ```
   Replace `<repository_url>` with the actual URL of the repository.
   将`<repository_url>`替换为实际的仓库URL。

2. **Install Dependencies / 安装依赖**
   First, install pnpm by running:
   ```
   npm install -g pnpm
   ```
   Then, navigate to the project directory and run:
   ```
   pnpm install
   ```

3. **Run the Project / 运行项目**
   In the project directory, run:
   ```
   pnpm dev
   ```

### That's all! / 就这样！
Thanks for experiencing our project! If you have any questions, please contact us.
感谢体验我们的项目！如果你有任何问题，请联系我们。

## Detection Model / 模型
See [model/README.md](model/README.md). 查看[model/README.md](model/README.md).
### How to Use / 如何使用
This is a model for detecting manhole covers. You can use it by following the instructions below.
这是一个用于检测市政设施的模型。你可以通过以下说明来使用它。

1. **Download and Extract the Project / 下载并解压项目**
   Download the project and extract its contents.

2. **Place the Model File / 放置模型文件**
   After extracting the project, place the `best.pt` file in the root directory of the API project.

3. **Run the API Project / 运行API项目**
   You can now run the API project and use the model to detect manhole covers.

### That's all! / 就这样！
Thanks for experiencing our project! If you have any questions, please contact us.
感谢体验我们的项目！如果你有任何问题，请联系我们。

## API / 接口
See [api/README.md](api/README.md). 查看[api/README.md](api/README.md).
### How to Use / 如何使用
The API project uses the detection model to identify manhole covers. Ensure you have placed the `best.pt` file in the root directory as described above.
API项目使用检测模型来识别井盖。请确保已按上述说明将`best.pt`文件放置在根目录中。

1. **Download and Extract the Project / 下载并解压项目**
   Download the project and extract its contents.

2. **Place the Model File / 放置模型文件**
   After extracting the project, place the `best.pt` file in the root directory of the API project.

3. **Run the API Project / 运行API项目**
   You can now run the API project and use the model to detect manhole covers.

### That's all! / 就这样！
Thanks for experiencing our project! If you have any questions, please contact us.
感谢体验我们的项目！如果你有任何问题，请联系我们。
