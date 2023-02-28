import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LineChart } from "react-native-chart-kit";
import data from "../data.json";
export default function HomeScreen() {
  const [selecter, setSelecter] = useState(false);
  const dataTime = [
    {
      id: 1,
      name: "1D",
      price: "11943",
      datasets: [
        {
          data: [
            9, 8, 7, 8, 10, 11, 8, 12, 9, 13, 14, 12, 10, 9, 11, 10, 12, 14, 10,
            9, 12, 11, 13,
          ],
          strokeWidth: 3,
        },
      ],
    },
    {
      id: 2,
      name: "1W",
      price: "98733",
      number: "12k",
      datasets: [
        {
          data: [
            9, 8, 7, 8, 10, 11, 8, 12, 9, 1, 14, 12, 10, 9, 11, 10, 12, 14, 10,
            9, 12, 11, 13,
          ],
          strokeWidth: 3,
        },
      ],
    },
    {
      id: 3,
      name: "1M",
      price: "45570",
      number: "10k",
      datasets: [
        {
          data: [
            9, 8, 7, 8, 10, 11, 8, 12, 9, 13, 14, 12, 10, 9, 8, 14, 12, 10, 7,
            9, 12, 11, 13,
          ],
          strokeWidth: 3,
        },
      ],
    },
    {
      id: 4,
      name: "3M",
      price: "78554",
      datasets: [
        {
          data: [
            9, 8, 7, 6, 10, 12, 8, 12, 9, 13, 10, 12, 10, 6, 11, 17, 12, 14, 10,
            9, 12, 11, 13,
          ],
          strokeWidth: 3,
        },
      ],
    },
    {
      id: 5,
      name: "1Y",
      price: "12673",
      datasets: [
        {
          data: [
            9, 8, 7, 8, 6, 11, 6, 12, 14, 13, 10, 8, 10, 9, 13, 10, 12, 8, 10,
            9, 12, 11, 13,
          ],
          strokeWidth: 3,
        },
      ],
    },
    {
      id: 6,
      name: "ALL",
      price: "45773",
      datasets: [
        {
          data: [
            9, 8, 7, 8, 7, 11, 8, 12, 9, 13, 14, 12, 10, 6, 9, 12, 8, 10, 13, 9,
            8, 11, 13,
          ],
          strokeWidth: 3,
        },
      ],
    },
  ];
  const [chartData, setChartData] = useState({
    price: "11943",
    datasets: [
      {
        data: [
          9, 8, 7, 8, 10, 11, 8, 12, 9, 13, 14, 12, 10, 9, 11, 10, 12, 14, 10,
          9, 12, 11, 13,
        ],
        strokeWidth: 3,
      },
    ],
  });
  const number = [
    {
      id: 1,
      number: "14k",
    },
    {
      id: 2,
      number: "12k",
    },
    {
      id: 3,
      number: "10k",
    },
    {
      id: 4,
      number: "8k",
    },
    {
      id: 5,
      number: "6k",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex:1}}>
        <View>
          <View style={styles.heading}>
            <Text style={styles.text}>Home</Text>
          </View>
          <View style={styles.wrap}>
            <View style={styles.chart}>
              <Text style={styles.sty_title}>${chartData.price}</Text>
              <LineChart
                data={chartData}
                width={Dimensions.get("window").width - 50} // from react-native
                height={220}
                yAxisSuffix="k"
                withHorizontalLines={false}
                withHorizontalLabels={false}
                withVerticalLines={false}
                chartConfig={{
                  color: () => "#e28743",
                  backgroundGradientFrom: "#fff",
                  backgroundGradientTo: "#fff",
                  decimalPlaces: 0,
                  withDots: false,
                  propsForDots: {
                    r: "",
                  },
                }}
                bezier
                style={{
                  marginTop: 15,
                  borderRadius: 16,
                  paddingRight: 10,
                  marginBottom:-20
                }}
              />
              <View
                style={{
                  position: "absolute",
                  right: 5,
                  height: 200,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 30,
                  top: 30,
                }}
              >
                {number.map((item) => {
                  return (
                    <Text
                      key={item.id}
                      style={{ height: 35, color: "#B0BAC2",fontSize:12 }}
                    >
                      {item.number}
                    </Text>
                  );
                })}
              </View>
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                  paddingHorizontal: 10,
                }}
              >
                {dataTime.map((item, index) => {
                  return (
                    <TouchableOpacity
                    key={item.id}
                      onPress={() => {
                        setChartData(item), setSelecter(index);
                      }}
                      style={[
                        styles.btn,
                        {
                          backgroundColor: index == selecter ? "#617180" : null,
                        },
                      ]}
                    >
                      <Text
                        style={{
                          color: index == selecter ? "#fff" : null,
                          fontWeight: "600",
                        }}
                      >
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
            <View style={styles.listItem}>
              <View style={styles.title}>
                <Text style={styles.sty_title}>Cash</Text>
              </View>
              {data.data.map((item) => {
                return (
                  <TouchableOpacity
                    style={styles.item}
                    key={item.id}
                    onPress={() => {
                      setPrice(item);
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Image style={styles.img} source={{ uri: item.image }} />
                      <View style={styles.item_title}>
                        <Text style={styles.item_name}>{item.name}</Text>
                        <Text style={styles.item_text}>{item.title}</Text>
                      </View>
                    </View>
                    <Text style={styles.sty_title}>${item.price}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  heading: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#497BD0",
  },
  text: {
    fontWeight: "600",
    fontSize: 18,
    color: "#fff",
    paddingTop: 30,
  },
  wrap: {
    height: "100%",
    width: "100%",
    backgroundColor: "#F4F6F9",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    flex:1, 
  },
  chart: {
    height: "40%",
    width: "100%",
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  listItem: {
    marginTop: 20,
    height: 500,
    width: "100%",
    backgroundColor: "#FFF",
  },
  title: {
    height: 60,
    justifyContent: "center",
    borderBottomWidth: 0.5,
    borderColor: "#ccc",
    paddingLeft: 10,
  },
  item: {
    height: 70,
    borderBottomWidth: 0.5,
    borderColor: "#ccc",
    paddingLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  sty_title: {
    fontWeight: "500",
    fontSize: 16,
    color: "#000",
  },
  img: {
    width: 45,
    height: 45,
    resizeMode: "contain",
    borderRadius: 22,
  },
  item_title: {
    justifyContent: "center",
    paddingLeft: 20,
  },
  item_name: {
    fontSize: 15,
    fontWeight: "500",
    color: "#808F9D",
  },
  item_text: {
    fontSize: 16,
    fontWeight: "600",
  },
  btn: {
    width: "12%",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
