import Layout from "../components/Layout";
// import Slider from "../components/Slider";
/* import Banner from "../components/Banner";
import OurTurn from "../components/OurTurn"; */

import dynamic from "next/dynamic";

const LoadingP = () => <p style={{ textAlign: "center" }}>Loading...</p>;

const DynamicBanWithLoading = dynamic(() => import("../components/Banner"), {
    loading: () => <LoadingP />
});

const DynamicTurnWithLoading = dynamic(() => import("../components/OurTurn"), {
    loading: () => <LoadingP />
});
const DynamicSliderWithLoading = dynamic(() => import("../components/Slider"), {
    loading: () => <LoadingP />
});

export default function Index() {
    return (
        <Layout>
            <div className="full-height display-flex w1200 main-wrapper">
                {/* 首屏轮播 */}
                <DynamicBanWithLoading />
                {/* <Banner /> */}
            </div>
            <div className="w1200 main-wrapper">
                <DynamicTurnWithLoading />
                {/* <OurTurn /> */}
            </div>
            <DynamicSliderWithLoading />
        </Layout>
    );
}
