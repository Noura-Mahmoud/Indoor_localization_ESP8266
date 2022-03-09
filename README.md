# requirements for Create flask APP

## 1- Create virtual Enviironment 

```
pip install virtualenv
virtualenv venv  
```

#### PS Don't forget to activate your virtual environment

#### In case working with windows activation may fail so check next link

[Activation](https://stackoverflow.com/questions/18713086/virtualenv-wont-activate-on-windows)

## 2- Run main.py to run server 

> install requirements first : 
> ```
> python -m pip install -r requirements.txt
> ```

```
python main.py
```
## 3- Make sure to be in React-App directory and run following commands

```
npm init
npm install
npm start
```
## Testing APIS
### 1- visit    http://localhost:8090/mapping   to see location predicted from Random Forest Classifier

### 2- visit    http://localhost:8090/data?STUDBME1="RSSI_Value"&STUDBME2="RSSI_Value"&iot="RSSI_Value"&CMP_LAB4="RSSI_Value"&CMP_LAB2="RSSI_Value"   to see location predicted from Random Forest Classifier
