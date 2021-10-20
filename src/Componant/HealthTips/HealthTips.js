import React from 'react';
import './HealthTips.css'

const HealthTips = () => {
    return (
        <div className="healthtips" >
            <div className="tips">
                <h1>1. Eat a healthy diet</h1>
                <img src="https://www.who.int/images/default-source/wpro/countries/philippines/feature-stories/1-20190529-091438-lr.tmb-1366v.jpg?sfvrsn=9ba890c9_2" alt="" />
                <p>Eat a combination of different foods, including fruit, vegetables, legumes, nuts and whole grains. Adults should eat at least five portions (400g) of fruit and vegetables per day. You can improve your intake of fruits and vegetables by always including veggies in your meal; eating fresh fruit and vegetables as snacks; eating a variety of fruits and vegetables; and eating them in season. By eating healthy, you will reduce your risk of malnutrition and noncommunicable diseases (NCDs) such as diabetes, heart disease, stroke and cancer.</p>
            </div>
            <div className="tips">
                <h1>2. Consume less salt and sugar</h1>
                <img src="https://www.who.int/images/default-source/wpro/countries/philippines/feature-stories/2-who-056764-orig.tmb-1366v.jpg?sfvrsn=c20a162e_2" alt="" />
                <p>Filipinos consume twice the recommended amount of sodium, putting them at risk of high blood pressure, which in turn increases the risk of heart disease and stroke. Most people get their sodium through salt. Reduce your salt intake to 5g per day, equivalent to about one teaspoon. It’s easier to do this by limiting the amount of salt, soy sauce, fish sauce and other high-sodium condiments when preparing meals; removing salt, seasonings and condiments from your meal table; avoiding salty snacks; and choosing low-sodium products.
                </p>
            </div>
            <div className="tips">
                <h1>3. Reduce intake of harmful fats</h1>
                <img src="https://www.who.int/images/default-source/wpro/countries/philippines/feature-stories/3-who-056149-img.tmb-1366v.jpg?sfvrsn=c0dc2291_2" alt="" />
                <p>Fats consumed should be less than 30% of your total energy intake. This will help prevent unhealthy weight gain and NCDs. There are different types of fats, but unsaturated fats are preferable over saturated fats and trans-fats. WHO recommends reducing saturated fats to less than 10% of total energy intake; reducing trans-fats to less than 1% of total energy intake; and replacing both saturated fats and trans-fats to unsaturated fats.

                    The preferable unsaturated fats are found in fish, avocado and nuts, and in sunflower, soybean, canola and olive oils; saturated fats are found in fatty meat, butter, palm and coconut oil, cream, cheese, ghee and lard; and trans-fats are found in baked and fried foods, and pre-packaged snacks and foods, such as frozen pizza, cookies, biscuits, and cooking oils and spreads.</p>
            </div>
            <div className="tips">
                <h1>4. Avoid harmful use of alcohol</h1>
                <img src="https://www.who.int/images/default-source/wpro/countries/philippines/feature-stories/4-who-056030-img.tmb-1366v.jpg?sfvrsn=227d74e_2" alt="" />
                <p>There is no safe level for drinking alcohol. Consuming alcohol can lead to health problems such as mental and behavioural disorders, including alcohol dependence, major NCDs such as liver cirrhosis, some cancers and heart diseases, as well as injuries resulting from violence and road clashes and collisions.</p>
            </div>

        </div>
    );
};

export default HealthTips;