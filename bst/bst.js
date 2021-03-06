(function () {
   "use strict";
   if (typeof this.console === 'undefined') {
      this.console = {};
      this.console.log = function () {
         if (typeof print === 'function') {
            print.apply(this, arguments);
         }
      };
   }
}).call(this);

function BST() {
   this.root = null;
}

function Node(key, value) {
   this.key = key;
   this.value = value;
   this.left = null;
   this.right = null;
}

BST.prototype.append = function (_key, _value, _current) {
   console.log(" appending " + _key +  " : " + _current.key)
   if (_key < _current.key) {
      if (_current.left === null) {
         _current.left = new Node(_key, _value);
      } else {
         this.append(_key, _value, _current.left);
      }
   } else if (_key > _current.key) {
      if (_current.right === null) {
         _current.right = new Node(_key, _value);
      } else {
         this.append(_key, _value, _current.right);
      }
   } else {
      _current.value = _value;
      return true;
   }
};

BST.prototype.find = function (_key, _current) {
   var result;
   //console.log(" finding " + _key +  " : " + _current.key)
   //console.log(_current.value);
   if (_key < _current.key) {
      if (_current.left === null) {
         return "no match";
      } else {
         return this.find(_key, _current.left);
      }
   } else if (_key > _current.key) {
      if (_current.right === null) {
         return "no match";
      } else {
         return this.find(_key, _current.right);
      }
   } else if (_key === _current.key) {
      return _current.value;
   } else {
      return "no match";
   }
};

BST.prototype.remove = function (_key, _current) {
   console.log(" removing " + _key +  " : " + _current.key)
   console.log(_current.value);

/// REMOVING 
   if ((_current.left === null) && (_current.right === null)) {
      return false;
   }

   if ((_current.left !== null) && (_key === _current.left.key)) {
      _current.left = null;
      return true;
   }

   if ((_current.right !== null) && (_key === _current.right.key)) {
      _current.right = null;
      return true;
   }

   if ((_key < _current.key) && (_current.left !== null)) {
      return this.remove(_key, _current.left);
   } else if ((_key > _current.key) && (_current.right !== null)) {
      return this.remove(_key, _current.right);
   } else {
      return "no match";
   }
};

BST.prototype.put = function (key, value) {
   var node = new Node(key, value);
   if (this.root === null) {
      this.root = node;
   } else {
      this.append(key, value, this.root);
   }
};

BST.prototype.delete = function (key) {
   if (this.root === null) {
      return "empty tree";
   } else {
      return this.remove(key, this.root);
   }
}

BST.prototype.get = function (key) {
   if (this.root === null) {
      return "empty tree";
   } else {
      return this.find(key, this.root);
   }
};

BST.prototype.toArray = function () {
   var result = [];
   this.traverse(function(node) {
      result.push(node.value);
   });
   return result;
};


//Test

function Test() {

   var b = new BST();
   b.put(7, "Seven");
   b.put(3, "Tres");
   b.put(1, "Uno");
   b.put(10, "Diaz");
   b.put(12, "Doce");

   console.log(b.get(7));
   console.log(b.get(1));
   console.log(b.get(10));
   console.log(b.get(12));

   console.log(b.delete(12));

}

Test();


