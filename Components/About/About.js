import React from "react";
import { StyleSheet, Text, View } from "react-native";

const About = () => {
  return (
    <View style={{ position: "absolute", top: 5200 }}>
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
          We are dolor, sit amet consectetur adipisicing elit. Ullam sapiente
          tenetur repudiandae ipsum deserunt, incidunt, saepe voluptatem quod
          facere consectetur, veritatis ex. Sequi numquam veritatis tempore
          porro cum reprehenderit officiis sed dolores repellat exercitationem
          minima nulla placeat, ut nihil ea explicabo omnis cumque? Officia
          voluptates quis, deleniti ut aliquid delectus similique ad?
          <br />
          <br />
          That is minima nemo earum! Sint rerum voluptatibus omnis cumque quod
          corrupti minima? Quo omnis unde magnam facilis officia, mollitia
          dolore amet eligendi, distinctio commodi obcaecati natus illo laborum,
          neque recusandae eius ratione molestiae suscipit. Optio, pariatur
          repudiandae culpa veniam tenetur enim nihil aspernatur praesentium
          omnis soluta asperiores voluptates itaque qui error harum non labore
          temporibus neque eaque eum nesciunt ipsam minima.
          <br />
        </Text>

        <TouchableOpacity>
          <Text style={styles.aboutBtn}>Explore More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default About;
