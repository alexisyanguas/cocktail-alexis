import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Pressable, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  withRepeat,
} from "react-native-reanimated";
import { interpolate, Extrapolate } from "react-native-reanimated";

const LikeButton = ({ isLiked, handleLike }) => {
  const liked = useSharedValue(isLiked ? 1 : 0);

  useEffect(() => {
    liked.value = isLiked ? withTiming(1) : withTiming(0);
  }, [isLiked]);

  const outlineStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(liked.value, [0, 1], [1, 0], Extrapolate.CLAMP),
        },
      ],
    };
  });

  const fillStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: liked.value,
        },
      ],
    };
  });

  return (
    <Pressable onPress={handleLike}>
      <Animated.View style={[StyleSheet.absoluteFillObject, outlineStyle]}>
        <MaterialCommunityIcons
          name={"heart-outline"}
          size={32}
          color={"black"}
        />
      </Animated.View>

      <Animated.View style={fillStyle}>
        <MaterialCommunityIcons name={"heart"} size={32} color={"#FF8484"} />
      </Animated.View>
    </Pressable>
  );
};


export default LikeButton;
