import React, {StatelessComponent} from 'react';
import './BasicInfoSection.scss';

interface Props {}

const BasicInfoSection: StatelessComponent<Props> = function() {
  return (
    <div className="basic-info-section">
      <div className="basic-info-section__field">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>

      <div className="basic-info-section__field">
        <label htmlFor="class">Class</label>
        <input type="text" name="class" id="class" />
      </div>

      <div className="basic-info-section__field">
        <label htmlFor="race">Race</label>
        <input type="text" name="race" id="race" />
      </div>
      <div className="basic-info-section__field">
        <label htmlFor="age">Age</label>
        <input type="text" name="age" id="age" />
      </div>
      <div className="basic-info-section__field">
        <label htmlFor="height">Height</label>
        <input type="text" name="height" id="height" />
      </div>
      <div className="basic-info-section__field">
        <label htmlFor="weight">Weight</label>
        <input type="text" name="weight" id="weight" />{' '}
      </div>
    </div>
  );
};

export default BasicInfoSection;
