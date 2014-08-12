'use strict';

var Template = require('bem/lib/template');

exports.API_VER = 2;

exports.techMixin = {

    getCreateResult : function(path, suffix, vars) {

        if (vars.opts && vars.opts.content) return vars.opts.content;

        return Template.process([
            "({",
            "    block: 'page',",
            "    title: '{{bemBlockName}}',",
            "    head: [",
            "        { elem: 'css', url: '../assets/_assets.css' }",
            "        { elem: 'css', url: '../assets/_assets', ie: true }",
            "    ],",
            "    content: [",
            "       {",
            "           block: 'header',",
            "           content: [",
            "               'block header'",
            "           ]",
            "       },",
            "       {",
            "           block: 'content',",
            "           content: [",
            "               'block content'",
            "           ]",
            "       },",
            "       {",
            "           block: 'footer',",
            "           content: [",
            "               'block footer'",
            "           ]",
            "       },",
            "       { elem: 'js', url:'../assets/_assets.js' }",
            "    ]",
            "})"], vars);
    }

};
