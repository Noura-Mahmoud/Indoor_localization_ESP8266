# IOT Task_1

## Team members
| Name  | Section| BN |
| ------------- | ------------- |------------- |
|Dalia Lotfy| 01| 30|
|Marwa AbdelAal| 02| 23|
|Nada Ezzat |02 |38  |
|Noura Mahmoud |02 |39|


# requirements for Create flask APP

## 1- Get your own IP address by using cmd of your device and type 
```
ipconfig
```

then make sure to change the existing IP in 'esp.ino', 'App.js' in both folders (reactapp) and (reactnative-app1) 

- Make sure to change SSID and password in the arduino code first

<!-- ## 1- Create virtual Enviironment  -->
<!-- 
```
pip install virtualenv
virtualenv venv  
```

#### PS Don't forget to activate your virtual environment

#### In case working with windows activation may fail so check next link

[Activation](https://stackoverflow.com/questions/18713086/virtualenv-wont-activate-on-windows) -->

## 2- Run main.py to run server 

> install requirements first : 
> ```
> python -m pip install -r requirements.txt
> ```

```
python main.py
```
## 3- Make sure to be in *reactapp* directory and run following commands

```
npm init
npm install
npm start
```
### existing in hall-way two
![](/images/hallway2.png)

## 4- To run the mobile app, make sure to be in *reactnative-app1* directory and run following commands

```
npm init
npm install
npm start
```
<!-- 
## Testing APIS
### 1- visit    http://localhost:8090/mapping   to see location predicted from Random Forest Classifier

### 2- visit    http://localhost:8090/data?STUDBME1="RSSI_Value"&STUDBME2="RSSI_Value"&iot="RSSI_Value"&CMP_LAB4="RSSI_Value"&CMP_LAB2="RSSI_Value"   to see location predicted from Random Forest Classifier -->

----------------------------
* there is a tracking mode which saves the last 50 readings and show them again 

