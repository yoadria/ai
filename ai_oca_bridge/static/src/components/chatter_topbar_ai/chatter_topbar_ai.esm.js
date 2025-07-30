/** @odoo-module **/

import {ChatterAIItem} from "../chatter_topbar_ai_item/chatter_topbar_ai_item.esm";
import {Component} from "@odoo/owl";
import {Dropdown} from "@web/core/dropdown/dropdown";
import {DropdownItem} from "@web/core/dropdown/dropdown_item";
import {patch} from "@web/core/utils/patch";
import {Chatter} from "@mail/core/web/chatter";

export class ChatterAITopbar extends Component {
    static template = "ai_oca_bridge.ChatterAITopbar";
    static components = {Dropdown, DropdownItem, ChatterAIItem};
    static props = {record: Object};

    /**
     * @returns {ChatterAITopbar}
     */
    get chatterTopbar() {
        return this.props.record;
    }
}

// Registrar el componente como un componente hijo del Chatter
patch(Chatter, {
    components: {
        ...Chatter.components,
        ChatterAITopbar,
    },
});
