import React from 'react';
import $ from 'jquery';

//IMPORT COMPONENTS
import Button from './Button/Button'

//DATA
import buttonArray from '../../Data/buttonArray'

const BtnGroup = () => {
    $(document).ready(function () {
        $(".btn-pref .btn").click(function () {
            $(".btn-pref .btn").removeClass("btn-primary").addClass("btn-default");
            // $(".tab").addClass("active"); // instead of this do the below 
            $(this).removeClass("btn-default").addClass("btn-primary");
        });
    });

    let elmButton = buttonArray.map((btn, index) => {
        return (
            <Button
                key={index}
                btn={btn}
            />
        );
    });

    return (
        <div
            className="btn-pref btn-group btn-group-justified btn-group-lg"
            role="group"
            aria-label="..."
        >
            {
                elmButton
            }
        </div>
    );
};

export default BtnGroup;