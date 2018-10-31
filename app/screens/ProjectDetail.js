import React, {Component} from "react";
import {StyleSheet, Text, View, Image} from "react-native";
import Carousel from 'react-native-carousel-view';

export default class ProjectDetail extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <View style={{width: "100%", height: "100%"}}>
                <View style={styles.container}>
                    <Carousel
                        width={375}
                        height={300}
                        delay={3000}
                        indicatorAtBottom={true}
                        indicatorSize={20}
                        indicatorText="✽"
                        indicatorColor="black"
                    >
                        <View style={styles.contentContainer}>
                            <Image
                                source={{ uri: 'https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2016/theroleofbod.jpg' }}
                                resizeMode="cover"
                                style={{ width: "100%", height: 200 }}
                            />
                        </View>
                        <View style={styles.contentContainer}>
                            <Image
                                source={{ uri: 'http://i.telegraph.co.uk/multimedia/archive/01604/scienceClass_1604229c.jpg' }}
                                resizeMode="cover"
                                style={{ width: "100%", height: 200 }}
                            />
                        </View>
                        <View style={styles.contentContainer}>
                            <Image
                                source={{ uri: 'http://www.gettingsmart.com/wp-content/uploads/2012/11/Classroom.jpg' }}
                                resizeMode="cover"
                                style={{ width: "100%", height: 200 }}
                            />
                        </View>
                    </Carousel>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        borderWidth: 2,
        borderColor: '#CCC',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
});
