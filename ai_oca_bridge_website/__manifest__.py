# Copyright 2025 Binhex
# License AGPL-3.0 or later (https://www.gnu.org/licenses/agpl).

{
    "name": "Bridge Snippets",
    "version": "16.0.1.0.0",
    "summary": "Add custom snippets to Odoo website editor.",
    "author": "Binhex",
    "website": "https://github.com/OCA/ai",
    "category": "Website",
    "depends": ["website", "web_editor", "bus", "ai_oca_bridge"],
    "data": [
        "security/ir.model.access.csv",
        "views/snippets/s_chat_widget.xml",
        "views/snippets/snippets.xml",
    ],
    "assets": {
        "web.assets_frontend": [
            "website_ai_agent_chat/static/src/scss/chat_widget.scss",
            "website_ai_agent_chat/static/src/js/chat_widget.esm.js",
        ],
        "website.assets_wysiwyg": [
            "website_ai_agent_chat/static/src/js/chat_widget_options.esm.js",
        ],
    },
    "installable": True,
    "application": False,
    "auto_install": False,
    "license": "LGPL-3",
}
