/**
 * The Edge of Anarchy game system for Foundry Virtual Tabletop
 * A system for playing EoA
 * Author: Josh Anderson
 * Software License: MIT
 */

import EquipmentDataModel from './EquipmentDataModel';

export default abstract class ContainerDataModel extends EquipmentDataModel {
	/**
	 * Whether the container is open or not.
	 */
	abstract open: boolean;

	static override defineSchema() {
		const fields = foundry.data.fields;

		return {
			...super.defineSchema(),
			open: new fields.BooleanField({ initial: false }),
		};
	}
}
