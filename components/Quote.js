import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

function Quote({ route }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitError, setSubmitError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { model, modelnumber } = route.params;
  useEffect(() => {
    if (model !== "Footer") {
      const newQuote = `${model} model#:${modelnumber}`;
      setMessage(newQuote);
    } else {
      setMessage("");
    }
  });
  const postMessage = () => {
    if (!name || !email || !message) {
      setSubmitError(true);
    } else {
      setSubmitError(false);
      setSubmitted(true);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        {submitError ? (
          <Text style={styles.status}>
            You didn't entered email, name or message
          </Text>
        ) : (
          <Text styles={styles.status}>
            Please enter the required information
          </Text>
        )}
        {submitted ? (
          <Text>
            Name:{name} Email:{email}
          </Text>
        ) : (
          <Text style={styles.req}>*required</Text>
        )}
        <Text style={styles.label}>Name *</Text>
        <TextInput
          style={styles.input}
          onChange={() => {
            (text) => setName(text);
          }}
          value={name}
        />
        <Text style={styles.label}>Email *</Text>
        <TextInput
          style={styles.input}
          onChange={() => {
            (text) => setEmail(text);
          }}
          value={email}
        />
        <Text style={styles.label}>Phone </Text>
        <TextInput
          style={styles.input}
          onChange={() => {
            (text) => setPhone(text);
          }}
          value={phone}
        />
        <Text style={styles.label}>Message *</Text>
        <TextInput
          style={styles.multi}
          onChange={() => {
            (text) => setMessage(text);
          }}
          value={message}
          multiline
          numberOfLines={6}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            postMessage();
          }}
        >
          <Text style={styles.btn_txt}>Submit Quote</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default Quote;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  input: {
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    fontSize: 26,
    width: 250,
  },
  label: {
    fontSize: 18,
    paddingTop: 20,
  },
  req: {
    paddingTop: 10,
    fontStyle: "italic",
  },
  multi: {
    borderColor: "black",
    borderWidth: 1,
    fontSize: 16,
    width: 300,
  },
  btn: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
    padding: 2,
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 5,
    backgroundColor: "green",
  },
  btn_txt: {
    color: "#fff",
  },
  status: {
    color: "#000080",
    paddingTop: 10,
    paddingBottom: 15,
  },
});
