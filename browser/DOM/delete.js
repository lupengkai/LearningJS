/**
 * Created by tage on 11/9/16.
 */
var self = document.getElementById('to-be-removed');
var parent = self.parentElement();
var removed = parent.removeChild(self);
removed === self;