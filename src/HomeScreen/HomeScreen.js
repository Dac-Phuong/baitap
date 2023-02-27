import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LineChart } from "react-native-chart-kit";
import data from "../data.json";
export default function HomeScreen() {
  const [timeframe, setTimeframe] = useState("ALL");
  const [dataType, setDataType] = useState("data");
  const [price, setPrice] = useState(11943);

  const [chartData, setChartData] = useState({
    datasets: [
      {
        data: [10, 14, 8, 6, 6, 9],
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  });

  const generateFakeData = (timeframe, dataType) => {
    const labels = [];
    const data = [];

    switch (timeframe) {
      case "D":
        for (let i = 0; i < 24; i++) {
          labels.push(`${i}:00`);
          data.push(Math.floor(Math.random() * 14));
        }
        break;
      case "W":
        for (let i = 0; i < 7; i++) {
          labels.push(`Day ${i + 1}`);
          data.push(Math.floor(Math.random() * 14));
        }
        break;
      case "M":
        for (let i = 0; i < 31; i++) {
          labels.push(`Day ${i + 1}`);
          data.push(Math.floor(Math.random() * 14));
        }
        break;
      case "Y":
        for (let i = 0; i < 12; i++) {
          labels.push(`Month ${i + 1}`);
          data.push(Math.floor(Math.random() * 14));
        }
        break;
      case "ALL":
        for (let i = 0; i < 5; i++) {
          labels.push(`Year ${i + 1}`);
          data.push(Math.floor(Math.random() * 14));
        }
        break;
      default:
        break;
    }

    if (dataType === "price") {
      data.forEach((value, index, array) => {
        array[index] = value * 14;
      });
    }
    return {
      labels: labels,
      datasets: [
        {
          data: data,
          color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
          strokeWidth: 2,
        },
      ],
    };
  };
  const handleButtonPress = () => {
    const newData = generateFakeData(timeframe, dataType);
    setChartData(newData);
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ flex: 1 }}>
          <View style={styles.heading}>
            <Text style={styles.text}>Home</Text>
          </View>
          <View style={styles.wrap}>
            <View style={styles.chart}>
              <Text style={styles.sty_title}>${price}{chartData.price}</Text>
              <LineChart
                data={chartData}
                onDataPointClick={({ index }) => {
                  console.log("dada");
                }}
                width={Dimensions.get("window").width - 20} // from react-native
                height={220}
                withVerticalLabels={false}
                yAxisSuffix="k"
                withHorizontalLines={false}
                withVerticalLines={false}
                chartConfig={{
                  backgroundGradientFrom: "#fff",
                  yAxis: { visible: false },
                  grid: { visible: false },
                  backgroundGradientTo: "#fff",
                  decimalPlaces: 0,
                  color: (opacity = 255) => `rgba(0, 2, 5, ${opacity})`,
                  withDots: false,
                  propsForDots: {
                    r: "",
                    strokeWidth: "2",
                  },
                }}
                bezier
                style={{
                  marginTop: 15,
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                  paddingHorizontal: 10,
                }}
              >
                <TouchableOpacity
                  onPress={handleButtonPress}
                  style={styles.btn}
                >
                  <Text>1D</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleButtonPress}
                  style={styles.btn}
                >
                  <Text>1W</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleButtonPress}
                  style={styles.btn}
                >
                  <Text>1M</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleButtonPress}
                  style={styles.btn}
                >
                  <Text>3M</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleButtonPress}
                  style={styles.btn}
                >
                  <Text>1Y</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleButtonPress}
                  style={styles.btn}
                >
                  <Text>ALL</Text>
                </TouchableOpacity>
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
                      setPrice(item.price);
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
    width: "14%",
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#497BD0",
    borderRadius: 10,
  },
});
