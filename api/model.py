from ultralytics import RTDETR
model = RTDETR('./best.pt')
import io
from PIL import Image
import base64


def predict(frame):
    results = model(frame, device='cpu')[0]
    manholes = []
    result = {}

    if results.boxes is not None and len(results.boxes) > 0:
        plotted_array= results.plot()
        img = Image.fromarray(plotted_array)
        buffered = io.BytesIO()

        # 保存图像到字节流，格式为PNG
        img.save(buffered, format="PNG")

        # 获取字节流的字节值
        img_bytes = buffered.getvalue()

        # 将字节值编码为Base64字符串
        img_base64 = base64.b64encode(img_bytes)

        # 将字节串转换为ASCII字符串以便输出或使用
        img_base64_string = 'data:image/png;base64,'+img_base64.decode('ascii')

        result['image'] = img_base64_string


        for box in results.boxes:
            manhole = {}
            x1, y1, x2, y2 = int(box.xyxy[0][0].item()), int(box.xyxy[0][1].item()), int(box.xyxy[0][2].item()), int(
                box.xyxy[0][3].item())
            manhole['x1'] = x1
            manhole['y1'] = y1
            manhole['x2'] = x2
            manhole['y2'] = y2
            manhole['confidence'] = float(box.conf.item())
            manhole['class'] = int(box.cls.item())
            manholes.append(manhole)
            result['manholes'] = manholes
            result['status'] = True
    else:
        result['status'] = False
    return result


if __name__ == '__main__':
    print(predict('./test/a.jpg'))
    # results = model('./test/a.jpg', device='cpu')[0]
    # manhole={}
    #
    #
    # if results.boxes is not None and len(results.boxes) > 0:
    #     for box in results.boxes:
    #         x1, y1, x2, y2 = int(box.xyxy[0][0].item()), int(box.xyxy[0][1].item()), int(box.xyxy[0][2].item()), int(
    #             box.xyxy[0][3].item())
    #         manhole['x1'] = x1
    #         manhole['y1'] = y1
    #         manhole['x2'] = x2
    #         manhole['y2'] = y2
    #         manhole['confidence'] = float(box.conf.item())
    #         manhole['class'] = int(box.cls.item())
    # print(manhole)
