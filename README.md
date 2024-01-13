# youhodler_test
test task for youhodler

```docker build -t youhodler_test_image .

docker run -e PORT=3000 -e TIMEOUT=10000 -e FREQUENCY=0.01 -p 3000:3000 --name youhodler_test youhodler_test_image```
