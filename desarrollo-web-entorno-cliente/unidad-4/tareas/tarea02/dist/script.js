"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LaberintoGame;
(function (LaberintoGame) {
    var Cell = /** @class */ (function () {
        function Cell(x, y) {
            this.x = x;
            this.y = y;
        }
        return Cell;
    }());
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        function Player() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.energy = 100;
            return _this;
        }
        Player.prototype.move = function (dx, dy) {
            this.x += dx;
            this.y += dy;
            this.energy -= 1;
        };
        return Player;
    }(Cell));
    LaberintoGame.Player = Player;
    var Trap = /** @class */ (function (_super) {
        __extends(Trap, _super);
        function Trap() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Trap.prototype.effect = function (player) {
            player.energy -= 20;
        };
        return Trap;
    }(Cell));
    LaberintoGame.Trap = Trap;
    var SpecialItem = /** @class */ (function (_super) {
        __extends(SpecialItem, _super);
        function SpecialItem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SpecialItem.prototype.effect = function (player) {
            player.energy += 10;
        };
        return SpecialItem;
    }(Cell));
    LaberintoGame.SpecialItem = SpecialItem;
    var Exit = /** @class */ (function (_super) {
        __extends(Exit, _super);
        function Exit() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Exit;
    }(Cell));
    LaberintoGame.Exit = Exit;
    var Matriz = /** @class */ (function () {
        function Matriz(rows, columns) {
            this.rows = rows;
            this.columns = columns;
            this.grid = Array.from({ length: rows }, function () { return Array(columns).fill(null); });
        }
        return Matriz;
    }());
    LaberintoGame.Matriz = Matriz;
})(LaberintoGame || (LaberintoGame = {}));
