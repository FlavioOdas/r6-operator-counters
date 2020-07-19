'use strict';

import counterType from '../core/counterTypeEnums';
import operatorId from '../core/operatorIdEnum';
import Operator from '../core/operatorFactory';
import r6operators from "r6operators";

let melusi = new Operator(r6operators.melusi, operatorId.melusi, "Operation Steel Wave");

export default melusi