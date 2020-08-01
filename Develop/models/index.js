// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'product_id'//why is this the foreignKey id????
});

// Products belongToMany Tags (through ProductTag)
Category.belongsToMany(Tag, {
  through: ProductTag,
  as: ['product_id', 'tag_id'], // why wouldn't we add "as:"" here????
  foreignKey: 'tag_id' // is this the right foreignKey????
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'product_id' // is this the right foreign key??
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
