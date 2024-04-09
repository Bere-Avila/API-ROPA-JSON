import ProductDAO from "../dao/clothing.dao.js";

const productsController = {};

export const getAll = (req, res) => {
    ProductDAO.getAll()
        .then(products => {
            res.json({ products });
        })
        .catch(err => res.json({
            status: "Server unavailable"
        }));
}

export const getOne = (req, res) => {
    const productCode = req.params.productCode;
    ProductDAO.getOne(productCode)
        .then(result => {
            if (result) {
                res.json(result);
            } else {
                res.status(404).json({
                    status: "Product not found"
                });
            }
        })
        .catch(err => res.status(500).json({
            status: "Server unavailable"
        }));
}

export const insertOne = (req, res) => {
    ProductDAO.insertOne(req.body)
        .then(result => res.status(201).json({
            status: "Product saved"
        }))
        .catch(err => res.status(500).json({
            status: "Server unavailable"
        }));
}

export const updateOne = (req, res) => {
    const productCode = req.params.productCode;
    const updatedProduct = req.body;

    ProductDAO.updateOne(productCode, updatedProduct)
        .then(result => {
            if (result) {
                res.json(result);
            } else {
                res.status(404).json({
                    status: "Product not found"
                });
            }
        })
        .catch(err => res.status(500).json({
            status: "Server unavailable"
        }));
}

export const deleteOne = (req, res) => {
    const productCode = req.params.productCode;

    ProductDAO.deleteOne(productCode)
        .then(result => {
            if (result) {
                res.json({
                    status: "Product deleted"
                });
            } else {
                res.status(404).json({
                    status: "Product not found"
                });
            }
        })
        .catch(err => res.status(500).json({
            status: "Server unavailable"
        }));
};