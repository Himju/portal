import * as React from "react";
import {useEffect} from "react";
import {connect} from "react-redux";

/* Layouts. */
import BoxLayout from "../../layouts/BoxLayout";
import {changeCoffee, changeCake} from "../../redux/actions/sections/homeActions";

/* Json data. */
let homeCafeData = require('./../../middleware/data/cafe.json');

/* Images. */
const cakeImage = require('../../multimedia/images/cake.jpg');

interface HomeCafeContainerProps {
    cake: string;
    coffee: string;
    changeCoffee: (text:string) => string;
    changeCake: (text:string) => string;
}

const HomeCafeContainer: React.FC<HomeCafeContainerProps> = (props) => {
    /* On upload, but stopped at refresh. */
    useEffect(() => {
        const fetchComment = async () => {
            // setLoading(true);
            // const res = await axiosl.get('url')
            // *change state*
            // setLoading(false);
        }
    }, []);

    return (
        <>
            <BoxLayout
                titleHeader={"Cafe content"}
                buttonName1={"Recipe"}
                buttonName2={"Pictures"}
                contentData={props.cake}
                image={cakeImage}
                changeItem={props.changeCake}
            />
        </>
    )
};

const mapStateToProps = (state: any) => {
    return {
        coffee: state.cafeReducer.coffee,
        cake: state.cafeReducer.cake
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        changeCoffee: (text: string) => dispatch(changeCoffee(text)),
        changeCake: (text: string) => dispatch(changeCake(text))
    }
};

const HomeCafeState = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeCafeContainer);

export default HomeCafeState;
