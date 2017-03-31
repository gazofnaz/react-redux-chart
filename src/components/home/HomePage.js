import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Radar} from 'react-chartjs';

/**
 * Render the chart
 */
class HomePage extends React.Component {

    render(){

        // here we make the settings usable
        const {settings} = this.props;

        // create new array with each rating e.g. [2.5, ...]
        const ratings = settings.map(setting => setting['value']);

        // create new array with each title e.g. ["Security", ...]
        const labels = settings.map(setting => setting['title']);

        const chartData = {
            labels,
            datasets: [
                {
                    label:                "Ratings",
                    fillColor:            "rgba(151,187,205,0.2)",
                    strokeColor:          "rgba(151,187,205,1)",
                    pointColor:           "rgba(151,187,205,1)",
                    pointStrokeColor:     "#fff",
                    pointHighlightFill:   "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data:                 ratings
                }
            ]
        };

        const chartOptions = {
            // remember to use v1 docs: https://github.com/chartjs/Chart.js/blob/v1.1.1/docs/03-Radar-Chart.md
            responsive:             true,
            maintainAspectRatio:    true,
            scaleShowLabels:        true,
            pointLabelFontSize:     12
        };

        // redraw option seems to prevent a bug whereby clicking on the chart tab (i.e. reload)
        // caused the chart to redraw with one label rotated
        // https://github.com/reactjs/react-chartjs/issues/170
        return(
            <div>
                <Radar data={chartData} options={chartOptions} redraw/>
            </div>
        );
    }
}

// here we make the settings required
HomePage.propTypes = {
    settings: PropTypes.array.isRequired
};

// Here we map our settings to the props in this component
function mapStateToProps(state, ownProps){
    return{
        // get course data from in the store, i.e. from in the reducer
        settings: state.courses
    };
}

// And here we connect ourselves to the multiverse (store)
export default connect(mapStateToProps)(HomePage);