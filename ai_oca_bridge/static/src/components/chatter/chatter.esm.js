/** @odoo-module **/

import {patch} from "@web/core/utils/patch";
import {Chatter} from "@mail/core/web/chatter";

patch(Chatter.prototype, {
    async onClickAiBridge(aiBridge) {
        // En Odoo 17, no necesitamos guardar el registro antes de ejecutar el bridge
        // porque el webRecord ya contiene los datos actuales
        let saved = true;
        
        // Si hay un método save disponible en el webRecord, lo usamos
        if (this.props.webRecord && this.props.webRecord.save) {
            try {
                await this.props.webRecord.save();
            } catch (error) {
                saved = false;
                console.error("Error saving record:", error);
            }
        }
        
        if (!saved) {
            return;
        }
        
        // Usar los datos del webRecord para obtener el modelo y el id
        const model = this.props.webRecord.resModel;
        const id = this.props.webRecord.resId;
        
        const result = await this.env.services.orm.call(
            "ai.bridge",
            "execute_ai_bridge",
            [[aiBridge.id], model, id]
        );
        
        if (result.action && this.env.services && this.env.services.action) {
            this.env.services.action.doAction(result.action);
        } else if (
            result.notification &&
            this.env.services &&
            this.env.services.notification
        ) {
            this.env.services.notification.add(
                result.notification.body,
                result.notification.args
            );
        }
    },
});
