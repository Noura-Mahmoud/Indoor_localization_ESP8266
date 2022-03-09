from sklearn.ensemble import RandomForestClassifier # Import Random Forest Classifier
from sklearn.model_selection import train_test_split # Import train_test_split function
from sklearn import metrics #Import scikit-learn metrics module for accuracy calculation
import pandas as pd
# metrics are used to find accuracy or error
from sklearn import metrics 
from joblib import dump, load

col_names = ['StudBME1', 'STUDBME2', 'RehabLab', 'CMP_LAB1', 'CMP_LAB2', 'CMP_LAB3', 'CMP_LAB4', 'Dalia_iphone','Dalialab','Mikasa','Nada','YME', 'location'] # CSV Header
# load dataset
data = pd.read_csv("task1_data.csv", header=None, names=col_names,skiprows=1)

#split dataset in features and target variable
feature_cols = ['StudBME1', 'STUDBME2', 'RehabLab', 'CMP_LAB1', 'CMP_LAB2', 'CMP_LAB3', 'CMP_LAB4', 'Dalia_iphone','Dalialab','Mikasa','Nada','YME']
X = data[feature_cols] # Features
y = data.location # Target variable

# Split dataset into training set and test set
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42) # 70% training and 30% test

# creating a RF classifier
clf = RandomForestClassifier(n_estimators = 100) 
 
# Training the model on the training dataset
# fit function is used to train the model using the training sets as parameters
clf.fit(X_train, y_train)

# performing predictions on the test dataset
y_pred = clf.predict(X_test)

# using metrics module for accuracy calculation
print("ACCURACY OF THE MODEL: ", metrics.accuracy_score(y_test, y_pred))
dump(clf, 'model.joblib')

def prediction (StudBME1, STUDBME2, RehabLab, iot, CMP_LAB1, CMP_LAB2, CMP_LAB3, CMP_LAB4, Dalia_iphone, Dalialab, Mikasa, Nada, YME):

   # create the one-dimensional array
   data = [StudBME1, STUDBME2, RehabLab, iot, CMP_LAB1, CMP_LAB2, CMP_LAB3, CMP_LAB4, Dalia_iphone, Dalialab, Mikasa, Nada, YME]
   # create the Series
   data = pd.Series(data)
   n=clf.predict([[39, 41, 36, 14, 0, 44, 44, 39, 41, 36, 14, 0]])
   n=clf.predict(data)
   print(n[0])
   return(n[0])