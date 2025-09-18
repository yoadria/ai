# Copyright 2025 Dixmit
# License AGPL-3.0 or later (https://www.gnu.org/licenses/agpl).

from markdown import markdown
from markupsafe import Markup

from odoo import models

MARKDOWN_EXTENSIONS = [
    "markdown.extensions.fenced_code",
    "markdown.extensions.codehilite",
    "markdown.extensions.tables",
    "markdown.extensions.sane_lists",
    "markdown.extensions.smarty",
    "markdown.extensions.nl2br",
    "markdown.extensions.extra",
]


class AIMarkdownMixin(models.AbstractModel):
    _name = "ai.markdown.mixin"
    _description = "AI Markdown formatting helpers"

    def _format_response_message(self, content):
        if content:
            return Markup(markdown(content, extensions=MARKDOWN_EXTENSIONS))
