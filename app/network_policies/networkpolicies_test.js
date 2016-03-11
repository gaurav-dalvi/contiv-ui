/**
 * Created by vjain3 on 3/10/16.
 */
'use strict';

describe('contiv.networkpolicies module', function () {

    beforeEach(module('ui.router'));

    beforeEach(module('contiv.networkpolicies'));

    describe('isolationpolicylistctrl', function () {

        var $httpBackend;
        var policyListData = [
            {
                "key": "default:middleware_net_policy",
                "policyName": "middleware_net_policy",
                "tenantName": "default",
                "link-sets": {},
                "links": {
                    "Tenant": {
                        "type": "tenant",
                        "key": "default"
                    }
                }
            },
            {
                "key": "default:db_net_policy",
                "policyName": "db_net_policy",
                "tenantName": "default",
                "link-sets": {},
                "links": {
                    "Tenant": {
                        "type": "tenant",
                        "key": "default"
                    }
                }
            }
        ];

        beforeEach(inject(function (_$httpBackend_) {
            $httpBackend = _$httpBackend_;
            $httpBackend.when('GET', 'http://localhost:9999/api/policys/').respond(policyListData);
        }));

        afterEach(function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        var $controller;
        beforeEach(inject(function (_$controller_) {
            $controller = _$controller_;
        }));
        it('should be defined', function () {
            //spec body
            var policyListCtrl = $controller('IsolationPolicyListCtrl');
            expect(policyListCtrl).toBeDefined();
            $httpBackend.flush();
        });
        it('IsolationPolicyListCtrl should do a GET on /api/policys/ REST API', function () {
            $controller('IsolationPolicyListCtrl');
            $httpBackend.expectGET('http://localhost:9999/api/policys/');
            $httpBackend.flush();
        });

    });

    describe('isolationpolicydetailsctrl', function () {

        var $controller;
        beforeEach(inject(function (_$controller_) {
            $controller = _$controller_;
        }));

        it('should be defined', function () {
            var isolationPolicyDetailsCtrl = $controller('IsolationPolicyDetailsCtrl');
            expect(isolationPolicyDetailsCtrl).toBeDefined();
        });

    });

    describe('isolationpolicycreatectrl', function () {

        var $controller;
        beforeEach(inject(function (_$controller_) {
            $controller = _$controller_;
        }));

        it('should be defined', function () {
            var isolationPolicyCreateCtrl = $controller('IsolationPolicyCreateCtrl');
            expect(isolationPolicyCreateCtrl).toBeDefined();
        });

    });
});
