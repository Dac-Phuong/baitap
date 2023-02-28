import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { PieChart } from "react-native-chart-kit";
import { AntDesign } from "react-native-vector-icons";
import { Dimensions } from "react-native";
export default function Expenses() {
  const customData = [
    {
      id: 1,
      name: "HOME & UTILITIES",
      image:
        "https://cdn.pixabay.com/photo/2014/04/03/00/42/power-plug-309142__340.png",
      money: "9,102",
      color: "#177AD5",
    },
    {
      id: 2,
      name: "TRAVEL",
      image:
        "https://modyolo.com/wp-content/uploads/2022/04/cartoon-city-2.png",
      money: "910,2",
      color: "#79D2DE",
    },
    {
      id: 3,
      name: "RIDER SHARING",
      image:
        "https://d3i4yxtzktqr9n.cloudfront.net/uber-sites/f452c7aefd72a6f52b36705c8015464e.jpg",
      money: "191,02",
      color: "#ED6665",
    },
    {
      id: 4,
      name: "GROCERIES",
      image:
        "https://www.pngitem.com/pimgs/m/51-517074_cartoon-grocery-png-transparent-png.png",
      money: "191,02",
      color: "orange",
    },
    {
      id: 5,
      name: "DRINK",
      image:
        "https://img.freepik.com/premium-vector/illustration-soft-drink-vector-cartoon-isolated_592024-28.jpg?w=2000",
      money: "19100,02",
      color: "green",
    },
    {
      id: 6,
      name: "DRINK",
      image:
        "https://img.freepik.com/premium-vector/illustration-soft-drink-vector-cartoon-isolated_592024-28.jpg?w=2000",
      money: "19100,02",
      color: "green",
    },
  ];
  const data = [
    {
      id: 1,
      name: "Rent",
      color: "#F44336",
    },
    {
      id: 2,
      name: "Restaurants",
      color: "#2196F3",
    },
    {
      id: 3,
      name: "Drinks",
      color: "#4CAF50",
    },
    {
      id: 4,
      name: "Uber",
      color: "#FFEB3B",
    },
    {
      id: 5,
      name: "Groceries",
      color: "#FF9800",
    },
  ];
  const datas = [
    {
      name: "Red",
      population: 15,
      color: "#f00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Green",
      population: 20,
      color: "#0f0",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Blue",
      population: 25,
      color: "#00f",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "White",
      population: 0,
      color: "#ccc",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];
  const chartConfig = {
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  const screenWidth = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={styles.heading}>
            <Text style={styles.text}>Expenses</Text>
          </View>
          <View style={styles.wrap}>
            <View style={styles.chart}>
              <PieChart
                data={datas}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
                accessor={"population"}
                backgroundColor={"transparent"}
                paddingLeft={"15"}
                center={[10, 50]}
                absolute
                style={{ marginVertical: 8, borderRadius: 16 }}
              />
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "center",
                  paddingHorizontal: 10,
                  marginBottom: 10,
                }}
              >
                {data.map((item) => {
                  return (
                    <View
                      key={item.id}
                      style={{
                        flexDirection: "row",
                        height: 30,
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          backgroundColor: item.color,
                          width: 10,
                          height: 10,
                          marginRight: 5,
                          marginHorizontal: 5,
                        }}
                      ></Text>
                      <Text>{item.name}</Text>
                    </View>
                  );
                })}
              </View>
            </View>
            <View style={styles.listItem}>
              <View style={styles.title}>
                <Text style={styles.sty_title}>Stop Spending Categories</Text>
              </View>
              {customData.map((item) => {
                return (
                  <TouchableOpacity style={styles.item} key={item.id}>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Image style={styles.img} source={{ uri: item.image }} />
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                          width: "87%",
                        }}
                      >
                        <View style={styles.item_title}>
                          <Text style={styles.item_name}>{item.name}</Text>
                          <Text style={styles.sty_title}>
                            ${item.money} spent
                          </Text>
                        </View>
                        <AntDesign name="right" size={20} />
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
              <View style={[styles.title, { flex: 1 }]}>
                <Text style={styles.sty_title}>View All Categories</Text>
              </View>
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
    backgroundColor: "#F4F6F9",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    flex: 1,
  },
  chart: {
    height: "40%",
    width: "100%",
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  listItem: {
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
    fontSize: 18,
    color: "#000",
  },
  img: {
    width: 40,
    height: 40,
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
