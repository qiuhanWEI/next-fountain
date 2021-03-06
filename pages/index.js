import Layout from '../components/Layout';
import dynamic from 'next/dynamic';

const LoadingP = () => <p style={{ textAlign: 'center' }}>Loading...</p>;

const DynamicBanWithLoading = dynamic(() => import('../components/Banner'), {
    loading: () => <LoadingP />
});

const DynamicTurnWithLoading = dynamic(() => import('../components/OurTurn'), {
    loading: () => <LoadingP />
});
const DynamicSliderWithLoading = dynamic(() => import('../components/Slider'), {
    loading: () => <LoadingP />
});
const DynamicProjectWithLoading = dynamic(() => import('../components/Project'), {
    loading: () => <LoadingP />
});
const DynamicServiceWithLoading = dynamic(() => import('../components/Service'), {
    loading: () => <LoadingP />
});

export default function Index() {
    return (
        <Layout>
            <div className="full-height display-flex w1200 main-wrapper">
                {/* 首屏轮播 */}
                <DynamicBanWithLoading />
            </div>
            {/* Our Turn */}
            <div className="w1200 main-wrapper">
                <DynamicTurnWithLoading />
            </div>
            {/* what we can do */}
            <DynamicSliderWithLoading />
            {/* service and solutions */}
            <DynamicServiceWithLoading />
            {/* recent projects */}
            <DynamicProjectWithLoading />
        </Layout>
    );
}
