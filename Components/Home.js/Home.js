import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  const image1 = {
    uri: "https://images.pexels.com/photos/1830937/pexels-photo-1830937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  };
  const aboutImage = {
    uri: "https://cdn.pixabay.com/photo/2016/02/19/11/36/canal-1209808_960_720.jpg",
  };
  const recentImage = {
    uri: "https://images.pexels.com/photos/1878359/pexels-photo-1878359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  };
  const [gallery, setGallery] = useState([
    {
      image: {
        uri: "https://images.pexels.com/photos/1891882/pexels-photo-1891882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
      title: "Ireland",
      key: "1",
    },
    {
      image: {
        uri: "https://images.pexels.com/photos/2404444/pexels-photo-2404444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
      title: "New zealand",
      key: "2",
    },
    {
      image: {
        uri: "https://images.pexels.com/photos/1822458/pexels-photo-1822458.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      title: "Switzerland",
      key: "3",
    },
    {
      image: {
        uri: "https://images.pexels.com/photos/3182530/pexels-photo-3182530.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      },
      title: "Michigan",
      key: "4",
    },
    {
      image: {
        uri: "https://images.pexels.com/photos/6152120/pexels-photo-6152120.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      title: "Florida",
      key: "5",
    },
  ]);

  return (
    <View style={{ flexGrow: 1, height: "100%" }}>
      <View>
        <ImageBackground
          source={image1}
          style={{ width: "100%", height: 270 }}
          imageStyle={{ borderBottomRightRadius: 65 }}
        >
          <View style={styles.DarkOverlay}></View>
          <View style={styles.searchContainer}>
            <Text style={styles.UserGreet}>Hi Akshay,</Text>
            <Text style={styles.userText}>
              Where would you like to go today?
            </Text>
          </View>
          <View>
            <TextInput
              style={styles.searchBox}
              placeholder="Search destination"
              placeholderTextColor="#666"
            ></TextInput>
            <Feather
              name="search"
              size={22}
              color="#666"
              style={{ position: "absolute", top: 30, right: 60, opacity: 0.6 }}
            />
          </View>
          <Feather
            name="menu"
            size={22}
            color="#fff"
            style={{ position: "absolute", top: 40, left: 16 }}
          />
          <Feather
            name="bell"
            size={22}
            color="#fff"
            style={{ position: "absolute", top: 40, right: 30 }}
          />
        </ImageBackground>
      </View>
      <View>
        <ScrollView>
          <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>
              Top Trending!
            </Text>
          </View>
          <View>
            <FlatList
              horizontal={true}
              data={gallery}
              renderItem={({ item }) => {
                return (
                  <View style={{ paddingVertical: 20, paddingLeft: 16 }}>
                    <TouchableOpacity>
                      <Image
                        source={item.image}
                        style={{
                          width: 150,
                          height: 250,
                          marginRight: 8,
                          borderRadius: 10,
                        }}
                      />
                      <View style={styles.ImageOverlay}></View>
                      <Feather
                        name="map-pin"
                        size={16}
                        color="white"
                        style={styles.imageLocationIcon}
                      />
                      <Text style={styles.ImageText}>{item.title}</Text>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>
          <View style={{ marginBottom: 60 }}>
            <View
              style={{
                padding: 20,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                Recently Viewed
              </Text>
              <Text
                style={{ fontSize: 14, fontWeight: "bold", color: "#ff6200" }}
              >
                View all
              </Text>
            </View>
            <Image
              source={recentImage}
              style={{
                width: "92%",
                height: 750,
                borderRadius: 10,
                alignSelf: "center",
              }}
            />
            <View style={{ position: "absolute", bottom: 0, padding: 16 }}>
              <View style={{ flexDirection: "row" }}>
                <Feather
                  name="map-pin"
                  color="white"
                  size={20}
                  style={{ marginLeft: 10, position: "relative", top: 4 }}
                />
                <Text
                  style={{
                    fontSize: 22,
                    color: "white",
                    fontWeight: "normal",
                    marginBottom: 10,
                    marginHorizontal: 10,
                  }}
                >
                  Florida
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 14,
                  color: "white",
                  fontWeight: "normal",
                  marginBottom: 4,
                  opacity: 0.9,
                  marginLeft: 16,
                }}
              >
                Venice, the capital of northern Italy's Veneto Region in the
                Adriatic Sea
              </Text>
            </View>
          </View>

          {/* Start about section */}

          <View>
            <View style={styles.aboutContainer}>
              <Text style={styles.aboutCaption}>About Us</Text>

              <Image
                source={aboutImage}
                style={{
                  width: "92%",
                  height: 750,
                  borderRadius: 10,
                  alignSelf: "center",
                  marginBottom: "20px",
                }}
              />

              <Text style={styles.aboutText}>
                {" "}
                We are dolor, sit amet consectetur adipisicing elit. Ullam
                sapiente tenetur repudiandae ipsum deserunt, incidunt, saepe
                voluptatem quod facere consectetur, veritatis ex. Sequi numquam
                veritatis tempore porro cum reprehenderit officiis sed dolores
                repellat exercitationem minima nulla placeat, ut nihil ea
                explicabo omnis cumque? Officia voluptates quis, deleniti ut
                aliquid delectus similique ad?
                <br />
                <br />
                That is minima nemo earum! Sint rerum voluptatibus omnis cumque
                quod corrupti minima? Quo omnis unde magnam facilis officia,
                mollitia dolore amet eligendi, distinctio commodi obcaecati
                natus illo laborum, neque recusandae eius ratione molestiae
                suscipit. Optio, pariatur repudiandae culpa veniam tenetur enim
                nihil aspernatur praesentium omnis soluta asperiores voluptates
                itaque qui error harum non labore temporibus neque eaque eum
                nesciunt ipsam minima.
                <br />
              </Text>

              <TouchableOpacity>
                <Text style={styles.aboutBtn}>Explore More</Text>
              </TouchableOpacity>
            </View>
          </View>

            {/* End about section */}

          <View>
            <View style={styles.contactContainer}>
              <Text style={styles.caption}>
                Welcome To Our ARN Travel Journey
              </Text>
              <Text style={styles.TextStyle}>
                Join With Us And Make Your Journey Enjoyable And Make Your Life
                Enjoyable
              </Text>

              <TextInput
                style={styles.Input}
                placeholder="Your Name"
                type="text"
              />
              <TextInput
                style={styles.Input}
                placeholder="Your Email"
                type="email"
              />
              <TextInput
                style={styles.Input}
                placeholder="Your Number"
                type="number"
              />
              <TextInput
                style={styles.Message}
                placeholder="Write Your Message"
                type="text"
              />
              <TouchableOpacity>
                <Text style={styles.text}>Send Message</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  DarkOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 270,
    backgroundColor: "#000",
    opacity: 0.2,
    borderBottomRightRadius: 65,
  },
  searchContainer: {
    paddingTop: 100,
    paddingLeft: 16,
  },
  UserGreet: {
    fontSize: 38,
    fontWeight: "bold",
    color: "white",
  },
  userText: {
    fontSize: 16,
    fontWeight: "normal",
    color: "white",
  },
  searchBox: {
    marginTop: 16,
    backgroundColor: "#fff",
    paddingLeft: 24,
    padding: 12,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    width: "90%",
  },
  ImageOverlay: {
    width: 150,
    height: 250,
    marginRight: 8,
    borderRadius: 10,
    position: "absolute",
    backgroundColor: "#000",
    opacity: 0.2,
  },
  imageLocationIcon: {
    position: "absolute",
    marginTop: 4,
    left: 10,
    bottom: 10,
  },
  ImageText: {
    position: "absolute",
    color: "white",
    marginTop: 4,
    fontSize: 14,
    left: 30,
    bottom: 10,
  },

  // About section start

  aboutContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  aboutBtn: {
    marginTop: "25px",
    backgroundColor: "#6274df",
    color: "#fafafa",
    paddingTop: "13px ",
    paddingBottom: "13px",
    paddingLeft: "74px",
    paddingRight: "74px",
    fontSize: "15px",
    fontWeight: "600",
    borderRadius: "10px",
    marginBottom: "50px",
  },
  aboutText: {
    width: "92%",
    fontSize: " 16px",
    fontWeight: "500",
    color: "#2f2d2d",
    color: "#969393",
  },
  aboutCaption: {
    fontSize: "40px",
    fontWeight: "700",
    color: "#6374df",
    marginBottom: "20px",
    backgroundColor: "#DDDDDD",
    width: "92%",
    textAlign: "center",
    padding: "20px",
    borderRadius: "8px",
  },

  // About section end

  //contact

  contactContainer: {
    flex: 1,
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "50px",
  },
  caption: {
    fontSize: "25px",
    fontWeight: "700",
    fontStyle: "italic",
    color: "#6374df",
    marginBottom: "20px",
  },
  TextStyle: {
    fontSize: " 16px",
    fontWeight: "500",
    color: "#2f2d2d",
    marginBottom: "50px",
    color: "#969393",
  },
  Input: {
    width: "70%",
    marginTop: "20px",
    backgroundColor: "#fafafa",
    padding: "12px",
    borderRadius: "7px",
    outline: "none!",
    fontSize: "14px",
    fontStyle: "italic",
  },
  Message: {
    width: "70%",
    marginTop: "20px",
    backgroundColor: "#fafafa",
    padding: "12px",
    borderRadius: "7px",
    outline: "none!",
    fontSize: "14px",
    fontStyle: "italic",
    paddingBottom: " 119px",
  },
  text: {
    marginTop: "20px",
    backgroundColor: "#6274df",
    color: "#fafafa",
    paddingTop: "13px ",
    paddingBottom: "13px",
    paddingLeft: "74px",
    paddingRight: "74px",
    fontSize: "15px",
    fontWeight: "600",
    borderRadius: "10px",
    marginBottom: "50px",
  },
});
export default Home;
