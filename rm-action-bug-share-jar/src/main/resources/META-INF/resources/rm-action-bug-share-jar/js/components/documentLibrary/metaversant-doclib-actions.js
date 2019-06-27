(function () {
    YAHOO.Bubbling.fire("registerAction",
        {
            actionName: "onActionGetWebScriptData",
            fn: function metaversant_onActionGetWebScriptData(file) {
                this.modules.actions.genericAction(
                    {
                        success: {
                            callback: {
                                fn: function metaversant_onActionGetWebScriptDataSuccess(response) {
                                    Alfresco.util.PopupManager.displayPrompt(
                                        {
                                            title: this.msg("metaversant.doclib.action.getWebScriptData.msg.title"),
                                            text: response.json.message,
                                            noEscape: true,
                                            buttons: [
                                                {
                                                    text: this.msg("button.ok"),
                                                    handler: function metaversant_onActionGetWebScriptDataSuccess_success_ok() {
                                                        this.destroy();
                                                    },
                                                    isDefault: true
                                                }]
                                        });

                                },
                                scope: this
                            }
                        },
                        failure: {
                            message: this.msg("metaversant.doclib.action.getRecordManagers.msg.failure",
                                file.displayName, Alfresco.constants.USERNAME)
                        },
                        webscript: {
                            name: "metaversant/get-webscript-data?nodeRef={nodeRef}",
                            stem: Alfresco.constants.PROXY_URI,
                            method: Alfresco.util.Ajax.GET,
                            params: {
                                nodeRef: file.nodeRef
                            }
                        },
                        config: {}
                    });
            }
        });
})();