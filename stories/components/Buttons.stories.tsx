import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Buttons} from "../../src/presentations/components/multi/Buttons";

storiesOf('Components/Buttons', module)
    .add('Ok button', () => <Buttons text={'Ok'}/>);
