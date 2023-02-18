import React from 'react';
import {
    MouseParallaxChild,
    MouseParallaxContainer
} from "react-parallax-mouse";
//   import "./styles.css";

const Skills = () => {
    return (
        <>
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    background: "#01011A",
                    color: "#fff",
                    overflow: "hidden"
                }}
            >
                <div
                    style={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center"
                    }}
                >
                    <h1 style={{ textAlign: "center", margin: "0 0 20px 0" }}>
                        My Skills | Example for React Parallax Mouse
                    </h1>
                    <MouseParallaxContainer
                        className="parallax"
                        containerStyle={{
                            width: "100%",
                            display: "grid",
                            gridTemplateColumns: "auto auto auto auto auto"
                        }}
                        globalFactorX={0.3}
                        globalFactorY={0.3}
                        resetOnLeave
                    >
                        <MouseParallaxChild
                            factorX={0.6}
                            factorY={0.1}
                            style={{
                                background:
                                    "url(https://images.unsplash.com/photo-1611502867268-9193c5c45f09?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80",
                                backgroundPositionY: "50%",
                                transform: "scale(1.2)",
                                position: "absolute",
                                filter: "blur(4px) brightness(50%)",
                                backgroundSize: "auto",
                                backgroundRepeat: "repeat",
                                width: "100%",
                                height: "100%",
                                backfaceVisibility: "hidden"
                            }}
                        />
                        <MouseParallaxChild
                            factorX={0.5}
                            factorY={0.5}
                            style={{
                                filter: "invert(1)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "auto",
                                height: "100%"
                            }}
                        >
                            <img height="50%" src="1.svg" alt="" />
                        </MouseParallaxChild>
                        <MouseParallaxChild
                            factorX={0.7}
                            factorY={0.5}
                            style={{
                                filter: "invert(1)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "auto",
                                height: "100%"
                            }}
                        >
                            <img height="50%" src="2.svg" alt="" />
                        </MouseParallaxChild>
                        <MouseParallaxChild
                            factorX={0.9}
                            factorY={0.5}
                            style={{
                                filter: "invert(1)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "auto",
                                height: "100%"
                            }}
                        >
                            <img height="50%" src="3.svg" alt="" />
                        </MouseParallaxChild>
                        <MouseParallaxChild
                            factorX={0.7}
                            factorY={0.5}
                            style={{
                                filter: "invert(1)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "auto",
                                height: "100%"
                            }}
                        >
                            <img height="50%" src="4.svg" alt="" />
                        </MouseParallaxChild>
                        <MouseParallaxChild
                            factorX={0.5}
                            factorY={0.5}
                            style={{
                                filter: "invert(1)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "auto",
                                height: "100%"
                            }}
                        >
                            <img height="50%" src="5.svg" alt="" />
                        </MouseParallaxChild>
                    </MouseParallaxContainer>
                </div>
            </div>
        </>
    );
};

export default Skills;