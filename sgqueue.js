function sgqueue(qname,logon) {
  if (qname) {
    this.qname = qname;
  } else {
    this.qname = 'Blah';
  }
  this.logon = logon;
  this.arrayQueue = new Array();
}
sgqueue.prototype.initialize = function() {};
sgqueue.prototype.enqueue = function(data) {
  if (this.logon) {
    console.log('[queue - '+this.qname+']','enqueue()',data);
  }
  this.arrayQueue.push(data);
  return true;
};
sgqueue.prototype.dequeue = function() {
  var data = this.arrayQueue.shift();
  if (this.logon) {
    console.log('[queue - '+this.qname+']','dequeue()',data);
  }
  return data;
};
sgqueue.prototype.show = function() {
  for (var i in this.arrayQueue) {
    console.log('[queue - '+this.qname+']','show()',i,this.arrayQueue[i]);
  }
};
sgqueue.prototype.qLength = function() {
  if (this.logon) {
    console.log('[queue - '+this.qname+']','qLength()',this.arrayQueue.length);
  }
  return this.arrayQueue.length;
}
module.exports = sgqueue;