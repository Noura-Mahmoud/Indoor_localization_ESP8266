#include <string.h>
#include <stdio.h>
#include <stdlib.h>

#include <ESP8266WiFi.h>

#include <ESP8266HTTPClient.h>
#include <WiFiClient.h>

#define led 0

WiFiClient client;
HTTPClient http;

#define WIFI_SSID "STUDBME2"
#define WIFI_PASSWORD "BME2Stud"

// if you are gonna use wifi networks , change "StudBME1" to "STUDBME1"
String saved_networks[] = {"StudBME1", "STUDBME2", "RehabLab", "CMP_LAB1", "CMP_LAB2", "CMP_LAB3", "CMP_LAB4", "Mikasa", "Nada", "Dalia iphone", "Dalialab","YME"};

int flag ;

int n = 0;                // number of scanned networks

//String rssi_string;
char rssi_buffer[30];
char* outputStrings[11];
char rssi_characters[30];

void setup()
{
    // Debug console
    Serial.begin(115200);
  
    connectToWiFi();
//    Serial.println(WiFi.localIP());
    
}


void loop()
{
    // Check that wiFi is still connected
    if(WiFi.status() != WL_CONNECTED)
    {
      connectToWiFi();
    }
    
//    Serial.println("WiFi scan started");
  
    // WiFi.scanNetworks will return the number of networks found
    n = WiFi.scanNetworks();

//    Serial.println("Wifi scan ended");

//    saveValues();
  
    // Displaying the scanned WiFis
    if (n == 0)
    {
//        Serial.println("no networks found");
    }
    else
    {
        printToSerial();
        // Reset rssi_characters
        memset(rssi_characters, 0, 30);
        
    }
    Serial.println("");
  
    // Wait a bit before scanning again
    delay(1000);
    WiFi.scanDelete();      
}



void connectToWiFi()
{
  // connect to wifi.
    WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
//    Serial.print("connecting");
    
    while (WiFi.status() != WL_CONNECTED)
    {
        Serial.print(".");
        delay(100);
    }
    Serial.println();
//    Serial.print("connected: ");
}

void printToSerial()
{
//  Serial.print(n);
//  Serial.println(" networks found");

   String scanned_ssids[n];
   String rssi_values[n];

for (int i = 0; i < n; i++)
  {
    scanned_ssids[i] = WiFi.SSID(i);
    rssi_values[i] = WiFi.RSSI(i);

//    Serial.print(WiFi.SSID(i));
//    Serial.print(',');
//    Serial.println(WiFi.RSSI(i));
  }

//for (int i = 0; i < 11; i++)// loop saved network
for (int i = 0; i < 12; i++)// loop saved network
  {
    flag = 1;
    for (int j = 0; j < n; j++)
    {
      if (saved_networks[i] == scanned_ssids[j])
      {
             Serial.print(saved_networks[i]);
             Serial.print(',');
//             Serial.println((myString.toInt(rssi_values[j])+ myString.toInt(100));
            Serial.println(rssi_values[j]);
             flag = 0;
             
      }
    }

    if ( flag == 1 )
    {
        flag = 0;
        Serial.print(saved_networks[i]);
        Serial.print(',');
        Serial.println("-100");
//        Serial.println("lecturesHall");
//        Serial.println("hallWay1");
//        Serial.println("hallWay2");
//        Serial.println("claib_lab");
//        Serial.println("network_lab");
//        Serial.println("elec_lab");
//        Serial.println("hallWay3");
    }

  }
 
  delay(1000);
  
}
