import React, { FC } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGenderless } from '@fortawesome/free-solid-svg-icons';
import { RootState } from '../../app/store';
import { updateSpectrumValue, getSpectrumValue } from './slice';

import { SpectrumAxis, SpectrumEndpoint } from './axes';

import styles from './styles.module.css';

export const SingleAxis: FC<SpectrumAxis> = ({ shortName, longName, description, endpoints }) => {
  const selectedValue = useSelector((state: RootState) => getSpectrumValue(state, shortName));
  const dispatch = useDispatch();

  const centerOption: SpectrumEndpoint = {
    label: '',
    icon: faGenderless,
  };

  const options: SpectrumEndpoint[] = [endpoints[0]];

  if (endpoints.length === 2) {
    // Linear spectrum
    if (
      endpoints[0].label === endpoints[1].label &&
      endpoints[0].icon.iconName === endpoints[1].icon.iconName
    ) {
      // Meme spectrum
    } else {
      // Actual spectrum
      options.push(centerOption, centerOption, endpoints[1]);
    }
  } else {
    // Triangular spectrum
    options.push(
      centerOption,
      centerOption,
      endpoints[1],
      centerOption,
      centerOption,
      endpoints[2],
      centerOption,
      centerOption
    );
  }

  return (
    <div className={styles.likert}>
      <h4>{longName}</h4>
      <form>
        <legend>{description}</legend>
        <fieldset
          className={`${styles['form-options']} ${
            styles[`form-options-${endpoints.length}-endpoints`]
          }`}
        >
          {options.map(({ icon, label }, i) => (
            <div
              className={`${styles['form-option']} ${
                selectedValue === i ? styles['form-option-selected'] : ''
              }`}
              // eslint-disable-next-line react/no-array-index-key
              key={`${shortName}-option-${i}`}
            >
              <input
                type="radio"
                name={`${shortName}-match`}
                id={`${shortName}-input-${i}`}
                value={i}
                onChange={() =>
                  dispatch(
                    updateSpectrumValue({
                      shortName,
                      value: i,
                    })
                  )
                }
                defaultChecked={selectedValue === i}
              />
              <label htmlFor={`${shortName}-input-${i}`}>
                <FontAwesomeIcon icon={icon} />
                <span>{label}</span>
              </label>
            </div>
          ))}
        </fieldset>
      </form>
    </div>
  );
};
